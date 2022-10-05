import './Main.css';
import SelfIntro from './SelfIntro';
import Filter from './Filter';
import ProjectList from './ProjectList';
import React from 'react';

export const FilterContext = React.createContext(0);

function Main() {
    const [tag, setTag] = React.useState(0);
    return (
        <FilterContext.Provider value={[tag, setTag]}>
            <div id="main-div">
                <SelfIntro />
                <Filter />
                <ProjectList />
            </div>
        </FilterContext.Provider>
    );
}

export default Main;