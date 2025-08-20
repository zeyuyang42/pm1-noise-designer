export default function UnsupportedDevice() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Unsupported Device</h1>
      <p className="max-w-md">
        This application is not optimized for mobile or small screens.
        Please use a desktop or larger device to view it.
      </p>
    </div>
  );
}