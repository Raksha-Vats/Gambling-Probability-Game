export const FoundIssue = () => {
  return (
    <div className="mb-24 lg:mb-32 mt-16 lg:mt-0 bg-[#262522] w-[96%] max-w-screen-lg mx-auto px-14 py-14 rounded-[36px]">
      <div className="lg:grid grid-cols-[45%,1fr] gap-28">
        <div className="rounded-xl">
          <img
            src="https://imgs.search.brave.com/9PuMl-cNnVmBzbfe3aFf5DQuDOxCiV9nOPdPowWjK5Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzY2/YmRmZWZjNGEwNGI3/NWVhYjdmNWZkYi8x/OWJlYjkzZS1hNDlk/LTRjMjgtYWI5NS1k/MTdlMmYzYWY0Yjcv/Y29udHJpYnV0aW9u/K3Byb2plY3QrXysu/cG5n"
            alt="chess-board"
          />
        </div>
        <div className="mt-16 lg:mt-0">
          <h1 className="text-6xl text-white font-bold text-left mt-[-10px]">
            Found an Issue!
          </h1>
          <p className="text-xl mt-6 text-white">
            Please create an issue in our github website below. You are also
            invited to contribute on the project.
          </p>

          <a
            href="https://github.com/Raksha-Vats/Gambling-Probability-Game/issues"
            target="_blank"
            className="mt-10 text-white rounded-2xl px-4 py-4 border border-slate-400 bg-transparent w-full text-2xl flex gap-10 items-center justify-center"
          >
            <img
              className="w-16 h-16"
              src="https://imgs.search.brave.com/TStlpuoBEmLFi_Kk1Fzvw1MiB62e8H_yQlMbtRyjkig/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni81OTY4LzU5Njg4/OTYucG5nP3NlbXQ9/YWlzX3doaXRlX2xh/YmVs"
              alt="icon"
            />
            <p className="text-4xl">Github</p>
          </a>
        </div>
      </div>
    </div>
  );
};
