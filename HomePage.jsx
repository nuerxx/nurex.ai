/src/pages/HomePage.jsx
import React from "react";
import HomePage from "./pages/HomePage";

function App() {
  return <HomePage />;
}

export default App;
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="px-6 py-4 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-2xl font-bold">Nurex</h1>
        <nav>
          <ul className="flex space-x-4 text-sm">
            <li>Home</li>
            <li>Upload</li>
            <li>Trending</li>
            <li>Demo</li>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      <main className="px-6 py-20 text-center">
        <h2 className="text-4xl font-semibold mb-6">Turn Long Videos into Viral Shorts with AI</h2>
        <p className="text-lg mb-8 text-gray-400 max-w-xl mx-auto">
          Nurex helps you create short, engaging content from any long video using powerful AI tools — no editing skills needed.
        </p>
        <Button className="text-black bg-white hover:bg-gray-200 transition-all">Start Free</Button>
      </main>

      <section className="px-6 py-12 bg-gray-900 text-left">
        <h3 className="text-2xl font-bold mb-6 text-center">Core Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold text-lg mb-2">Speech to Text</h4>
              <p className="text-sm text-gray-400">Automatically transcribe video audio with high accuracy.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold text-lg mb-2">Smart Clipping</h4>
              <p className="text-sm text-gray-400">AI highlights key moments to create short clips.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold text-lg mb-2">Dynamic Captions</h4>
              <p className="text-sm text-gray-400">Multi-language subtitles with styled animations.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-6 py-16 text-center">
        <h3 className="text-2xl font-bold mb-4">Upload Your Video</h3>
        <p className="text-gray-400 max-w-2xl mx-auto mb-6">
          Upload from your device or paste a link from YouTube, TikTok, or Instagram. Choose your content type and let AI do the rest.
        </p>
        <Button className="bg-white text-black">Upload or Paste Link</Button>
      </section>

      <section className="px-6 py-16 bg-gray-900 text-center">
        <h3 className="text-2xl font-bold mb-4">Trending Videos</h3>
        <p className="text-gray-400 max-w-2xl mx-auto mb-6">
          Discover top trending content across platforms — updated automatically to inspire your next viral video.
        </p>
        <Button className="bg-white text-black">See What's Hot</Button>
      </section>

      <section className="px-6 py-16 text-center">
        <h3 className="text-2xl font-bold mb-4">Demo Projects</h3>
        <p className="text-gray-400 max-w-2xl mx-auto mb-6">
          Watch AI-edited examples to understand what Nurex can do. Explore smart captions, smooth cuts, and multilingual outputs.
        </p>
        <Button className="bg-white text-black">View Demos</Button>
      </section>

      <section className="px-6 py-16 bg-gray-900 text-center">
        <h3 className="text-2xl font-bold mb-4">Video Naming</h3>
        <p className="text-gray-400 max-w-2xl mx-auto mb-6">
          After processing, Nurex will suggest a smart, attention-grabbing name for each clip based on the content type, keywords, and trends.
        </p>
        <Button className="bg-white text-black">Generate Titles</Button>
      </section>

      <section className="px-6 py-16 bg-gray-900 text-center">
        <h3 className="text-2xl font-bold mb-4">Pricing</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h4 className="text-lg font-bold mb-2">Free Plan</h4>
              <p className="text-sm text-gray-400 mb-4">1 video/day • Nurex watermark</p>
              <Button className="w-full">Try Free</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="text-lg font-bold mb-2">Pro Plan</h4>
              <p className="text-sm text-gray-400 mb-4">Unlimited videos • No watermark • Multi-language support</p>
              <Button className="w-full bg-white text-black">Subscribe</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="text-lg font-bold mb-2">Enterprise Plan</h4>
              <p className="text-sm text-gray-400 mb-4">API access • Branding • Team support</p>
              <Button className="w-full">Contact Sales</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="px-6 py-12 text-sm text-gray-500 text-center border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Nurex — Built by Shehab</p>
        <p>📧 nurexstudio@gmail.com | 📱 @sh1al2</p>
      </footer>
    </div>
  );
}
