export const SocialIconsFloating = () => {
  return (
    <div className="absolute flex top-0 left-0 w-full h-full md:hidden">
      {/* Left icons */}
      <div className="absolute top-0 left-20">🤯</div>
      <div className="absolute top-2 left-4">⚡️</div>
      <div className="absolute top-10 left-10">🥳</div>
      <div className="absolute top-16 left-0">❤️</div>
      <div className="absolute top-24 left-6">🤯</div>
      <div className="absolute top-36 left-0">⚡️</div>
      <div className="absolute top-36 left-8">🤯</div>
      <div className="absolute top-48 left-8">❤️</div>

      {/* Right icons */}
      <div className="absolute bottom-2 right-20">🤯</div>
      <div className="absolute bottom-10 right-10">🤯</div>
      <div className="absolute bottom-16 right-0">🤯</div>
      <div className="absolute bottom-24 right-6">🤯</div>
      <div className="absolute bottom-36 right-0">⚡️</div>
    </div>
  );
};
