import React  from 'react';
import Main from './Main';
import Header from './common/Header';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <Main />
            </div>
        );
    }
}

export default App;
