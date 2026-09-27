type HeroVideoBackgroundProps = {
  videoId: string;
  title: string;
};

// Fills the parent box edge-to-edge (like `object-cover` on an <img>) by
// oversizing the iframe to a fixed 16:9 box and centering it, since YouTube's
// embed itself only ever letterboxes/pillarboxes to fit the iframe's own box.
// Expects a `relative overflow-hidden` parent.
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
      className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2"
      src={`https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`}
      title={title}
      allow="autoplay; encrypted-media"
      tabIndex={-1}
    />
  );
}
