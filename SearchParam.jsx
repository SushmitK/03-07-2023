import { useState , useEffect} from "react";
import Pet from './Pet';

const Animals = ["Bird","dog","cat","Horse","Humans"];
const Breeds = ["German","Mixed"];

const SearchParam = () => {
    const [location , setLocation] = useState("India IN");
    const [Animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);

    useEffect(() => {
        requestPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    async function requestPets(){
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${Animal}&location=${location}&breed=${breed}`
        )
        const json = await res.json();
        setPets(json.pets);
    }

    return (
        <div className="search-params">
            <form action="" onSubmit={e => {
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    Location
                    <input onChange={
                        (e) => setLocation(e.target.value)
                    } type="text" id="location" value={location} name="location" />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select id="animal" value={Animal} onChange={ e => {setAnimal(e.target.value); setBreed("");} }>
                        {Animals.map((a) => {
                            return <option key={a}>{a}</option>
                        })}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select disabled={Breeds.length === 0} id="breed" value={breed} onChange={(e) => setBreed(e.target.value)}>
                        {
                            Breeds.map((p) => {
                                return <option key={p}>{p}</option>
                            })
                        }
                    </select>
                </label>
                <button type="Submit">Submit</button>
            </form>
            {
                pets.map((pet) => {
                    return <Pet name={pet.name} animal ={pet.animal} breed={pet.breed} key={pet.id} />
                } )
            }
        </div>
    )
}

export default SearchParam;