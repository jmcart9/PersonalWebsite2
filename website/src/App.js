import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const App = () => {
    return (
        <div className="container">
            <h1>Hello, I'm Jorvon!</h1>
            <p>Welcome to my personal website.</p>
			
			<ul> 
				<li><a href="https://www.linkedin.com/in/jorvoncarter/">LinkedIn</a></li> 
				<li><a href="https://github.com/jmcart9/PersonalWebsite2">GitHub</a></li> 
				<li><a href="https://medium.com/@jorvoncarter">Medium</a></li> 
			</ul>

			<p>
			La perfection soit atteinte non quand il n'y a plus rien à ajouter, <br /> mais quand il n'y a plus rien à retrancher.
			</p>
			
        </div>
    );
};

//ReactDOM.render(<App />, document.getElementById('root'));

export default App;
