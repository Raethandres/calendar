import React from 'react';
import {Provider} from "react-redux"
import Store from "./redux/store"
import Calendar from "./containers/calendar";

function App() {
    return (
        <Provider store={Store} >
            <div className="content">
                <Calendar />
            </div>
        </Provider>

    );
}

export default App;
