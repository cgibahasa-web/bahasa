"use client";

import { useEffect, useId, useRef } from "react";

type HeroVideoBackgroundProps = {
  videoId: string;
  title: string;
};

// Minimal shape of the YouTube IFrame Player API we actually use.
// `vq=hd1080` in the embed URL is a legacy param the iframe embed no
// longer honors, so we drive quality through the JS API instead.
type YTPlayerEvent = { target: YTPlayer; data?: string };
type YTPlayer = {
  setPlaybackQuality: (quality: string) => void;
  destroy: () => void;
};
type YTNamespace = {
  Player: new (
    elementId: string,
    options: {
      events: {
        onReady: (event: YTPlayerEvent) => void;
        onPlaybackQualityChange: (event: YTPlayerEvent) => void;
      };
    },
  ) => YTPlayer;
};

declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiPromise: Promise<YTNamespace> | null = null;

function loadYouTubeIframeApi(): Promise<YTNamespace> {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (apiPromise) return apiPromise;

  apiPromise = new Promise((resolve) => {
    const previousCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previousCallback?.();
      resolve(window.YT!);
    };

    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(script);
    }
  });

  return apiPromise;
}

// Expects a `relative aspect-video` parent so the 16:9 embed exactly fills it
// with no letterboxing or cropping.
export default function HeroVideoBackground({
  videoId,
  title,
}: HeroVideoBackgroundProps) {
  const elementId = `hero-video-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const playerRef = useRef<YTPlayer | null>(null);

  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: videoId,
    controls: "0",
    disablekb: "1",
    playsinline: "1",
    modestbranding: "1",
    rel: "0",
    iv_load_policy: "3",
    vq: "hd1080",
    enablejsapi: "1",
  });

  useEffect(() => {
    let cancelled = false;

    const forceHighQuality = (target: YTPlayer) => target.setPlaybackQuality("hd1080");

    loadYouTubeIframeApi().then((YT) => {
      if (cancelled) return;
      playerRef.current = new YT.Player(elementId, {
        events: {
          onReady: (event) => forceHighQuality(event.target),
          onPlaybackQualityChange: (event) => {
            if (event.data !== "hd1080") forceHighQuality(event.target);
          },
        },
      });
    });

    return () => {
      cancelled = true;
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [elementId]);

  return (
    <iframe
      id={elementId}
      className="pointer-events-none absolute inset-0 h-full w-full"
      src={`https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`}
      title={title}
      allow="autoplay; encrypted-media"
      tabIndex={-1}
    />
  );
}
