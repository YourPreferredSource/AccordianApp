import { React, useState } from 'react';
import Question from './Question';
import data from './data';
import './App.css';

const App = () => {
  // const [ questions, setQuetions ] = useState(data);

  return (
    <main>
      <div className="midSection">
        <h2>
          The info you require!
        </h2>
        <section>
          {data.map((question) => {
            return (
              <Question key={question.id} {...question}></Question>
            )
          })}
        </section>
      </div>
    </main>
  )
}

export default App;
