import seriesData from "../api/seriesData.json"
import SeriesCard from "./SeriesCard";
const NetflixSeries = () => {
    return (
        <ul type="none" className="grid grid-three--cols">
            {seriesData.map((curElem) => {
                return(
                <SeriesCard key={curElem.id} data={curElem}/>)
})}

        </ul>
    );
};

export default NetflixSeries;
