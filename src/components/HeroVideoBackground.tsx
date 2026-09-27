type HeroVideoBackgroundProps = {
  videoId: string;
  title: string;
};

// Expects a `relative aspect-video` parent so the 16:9 embed exactly fills it
// with no letterboxing or cropping.
export default function HeroVideoBackground({
  videoId,
  title,
}: HeroVideoBackgroundProps) {
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
  });

  return (
    <iframe
      className="pointer-events-none absolute inset-0 h-full w-full"
      src={`https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`}
      title={title}
      allow="autoplay; encrypted-media"
      tabIndex={-1}
    />
  );
}
