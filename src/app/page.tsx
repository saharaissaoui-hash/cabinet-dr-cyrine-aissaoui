export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center text-center">
      
      <h1 className="text-5xl font-bold text-gray-900">
        Cabinet de Médecine Esthétique
      </h1>

      <p className="mt-4 text-xl text-gray-600">
        Dr Cyrine Aissaoui
      </p>

      <button className="mt-8 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition">
        Prendre rendez-vous
      </button>

    </main>
  );
}