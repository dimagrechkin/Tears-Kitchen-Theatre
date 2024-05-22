export const Video = ({ muted }) => {
  return (
    <video
      className="h-screen w-full bg-cover"
      style={{
        objectFit: 'cover',
      }}
      autoPlay
      muted={muted}
      playsInline
      id="video1"
    >
      <source src="/garbageside.demo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}
