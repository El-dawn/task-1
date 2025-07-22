export default function Home() {
  return (
		<>
			<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
				<h1 className="text-[40px] font-bold text-black mb-12">
					POKEMON SHOWCASE
				</h1>
				<div className="ml-[140px] grid grid-cols-[30%_70%] w-[80%] gap-4">
					{/* Pokemon */}
					<div className="rounded-lg shadow-xl bg-white p-6 ml-[100px] w-[250px] h-[250px]">
						<img
							src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"
							alt="Bulbasaur"
						/>
					</div>

					{/* Description */}
					<div className="rounded-lg shadow-xl bg-white w-[600px] p-6">
						<ul className="list-none pl-2">
							<li className="flex items-center gap-3">
								<h1 className="text-[30px] font-bold text-black">Bulbasaur</h1>
								<span className="bg-[rgba(56,100,73,1)] text-white px-4 py-1 mt-2 rounded-full font-bold text-[10px]">
									GRASS
								</span>
								<span className="bg-[#553864] text-white px-4 py-1 mt-2 rounded-full font-bold text-[10px]">
									POISON
								</span>
							</li>
							<li>
								<p className="text-[16px] text-black mt-2">
									Bulbasaur is a dual-type Grass/Poison Pokémon known for the{" "}
									<br />
									plant bulb on its back. It's one of the original starter
									Pokémon <br />
									from the first-generation games (Pokémon Red/Blue). As it
									grows, <br />
									the bulb absorbs sunlight and eventually blooms into a large{" "}
									<br />
									flower when it evolves.
								</p>
							</li>
						</ul>
					</div>

					{/* Stats */}
					<div className="flex ml-[100px] mt-[20px] w-[250px] h-[250px]">
						<div className="grid grid-rows-2 gap-4 w-full">
							{/* HP */}
							<div className="flex items-center bg-white shadow-xl rounded-lg p-3">
								<div className="flex items-baseline mx-3">
									<h2 className="text-[40px] font-bold text-black">48</h2>
									<span className="text-gray-500 ml-1 text-sm">HP</span>
								</div>

								<div className="h-4 w-32 bg-gray-200 rounded-full overflow-hidden">
									<div className="h-full bg-red-600 rounded-full w-[48%]"></div>
								</div>
							</div>
							{/* MP */}
							<div className="flex items-center bg-white shadow-xl rounded-lg p-3">
								<div className="flex items-baseline mx-3">
									<h2 className="text-[40px] font-bold text-black">48</h2>
									<span className="text-gray-500 ml-1 text-sm">MP</span>
								</div>

								<div className="h-4 w-32 bg-gray-200 rounded-full overflow-hidden">
									<div className="h-full bg-blue-600 rounded-full w-[48%]"></div>
								</div>
							</div>
						</div>
					</div>

					{/* Did you Know */}
					<div className="bg-white rounded-lg shadow-xl p-6 flex gap-4 mt-[20px] w-[600px]">
						<img
							src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
							alt="Pokeball"
							className="w-[50px] h-[50px] object-contain mt-1"
						/>
						<div className="flex flex-col justify-end items-end text-right w-full">
							<p className="text-[30px] font-bold text-black mb-1">
								DID YOU KNOW?
							</p>
							<p className="text-[16px] text-black">
								Bulbasaur is the only starter Pokémon that is dual-typed
								<br />
								(Grass/Poison) from the very beginning of its evolution line!
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
