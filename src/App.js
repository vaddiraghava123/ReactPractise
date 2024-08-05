import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import React, { useState } from 'react'
import Hello from './components/functionComponents/HelloUsingFunction';
import HelloUseConst from './components/constants/HelloConst';
import HelloUseConstWithJSFx from './components/constants/HelloUseConstWithJSFx';
import StateMaintainUsingWithoutHooks from './components/classComponents/StateMaintainUsingWithoutHooks';
import AppClassComponent from './components/classComponents/AppClassComponent';
import AppFunctionComponent from './components/functionComponents/AppFunctionComponent';
import ParentComponent from './components/classComponents/ParentComponent';
import NameList from './components/functionComponents/NameList';
import UserGreeting from './components/classComponents/UserGreeting';
import PropsHello from './components/constants/PropsHello';
import EventBind from './components/classComponents/EventBind';

import EmployeesComponent from './components/employee/EmployeesComponent';
import ListEmployeeComponents from './components/employee/ListEmployeeComponents';
import RetreiveListEmployees from './components/employee/RetreiveListEmployees';
import HeaderComponent from './components/employee/HeaderComponent';
import FooterComponent from './components/employee/FooterComponent';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UseStateHookImplement from './components/hooks/UseStateHookImplement.js';
import UseStateHookShortFormImplement from './components/hooks/UseStateHookShortFormImplement.js';

import UseReducerHookImplement from './components/hooks/UseReducerHookImplement.js';

import UseEffectImplement from './components/hooks/UseEffectImplement.js';
import UseLayoutEffectImplement from './components/hooks/UseLayoutEffectImplement.js';
import UseRefImplement from './components/hooks/UseRefImplement.js';
import UseImperativeHandleImplement from './components/hooks/UseImperativeHandleImplement.js';
import UseContextImplement from './components/hooks/UseContextImplement.js';
import UseMemoImplement from './components/hooks/UseMemoImplement.js';

import DisplayValuesUsingState from './components/practiseall/DisplayValuesUsingState.js';
import SingleSelect from './components/practiseall/SingleSelect.js';
import MultiSelect from './components/practiseall/MultiSelect.js';


import RadioButtons from './components/practiseall/RadioButtons.js';
import Checkboxes from './components/practiseall/CheckBoxes.js';
import StudentForm from './components/practiseall/StudentForm.js';

import ModalComponent from './components/practiseall/ModalComponent.js';
import { Button } from 'react-bootstrap';

import PromptModal from './components/practiseall/PromptModal.js';
import OnewayBinding from './components/practiseall/OnewayBinding.js';
import TwowayBinding from './components/practiseall/TwowayBinding.js';
import FormModal from './components/practiseall/FormModal.js';
function App() {
  const [count, setCount] = useState(0);
  const options = ['Raghava', 'Vaddi', 'Thulasi', 'Java', 'Oorvin'];


  const [showModal1, setShowModal1] = useState(false);
  const handleShowModal1 = () => setShowModal1(true);
  const handleCloseModal1 = () => setShowModal1(false);

  const [showModal2, setShowModal2] = useState(false);
  const handleShowModal2 = () => setShowModal2(true);
  const handleCloseModal2 = () => setShowModal2(false);


  const [showPrompt, setShowPrompt] = useState(false);

  const handleShowPrompt = () => setShowPrompt(true);
  const handleClosePrompt = () => setShowPrompt(false);

  const handleOk = () => {
    console.log('OK clicked');
    setShowPrompt(false);
  };

  const message = "Hello Oneway - binding";

  const [bindingValue, setBindingValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (value) => {
    setInputValue(value);
  }


  const [showModal3, setShowModal3] = useState(false);

  const handleShow3 = () => setShowModal3(true);
  const handleClose3 = () => setShowModal3(false);

  return (
    <div>
      <table className='table  table-bordered'>
        <th> React Practise </th>
        <tr>
          <td>
            <Hello />
          </td>
          <td>
            <HelloUseConst />
          </td>
          <td>
            <HelloUseConstWithJSFx />
          </td>
        </tr>
        <tr>
          <td>
            <StateMaintainUsingWithoutHooks />
          </td>
          <td>
            <AppClassComponent name="testingClassProps" />
          </td>
          <td>
            <AppFunctionComponent />
          </td>
        </tr>
        <tr>
          <td>
            <UserGreeting />
          </td>
          <td>
            <ParentComponent />
          </td>
          <td>
            <NameList />
          </td>
        </tr>
        <tr>
          <td>
            <PropsHello name="Raghu" id="10">
              <button>CLICK PROPS</button>
              <p> TESTING PROPS Child </p>
            </PropsHello>
          </td>
          <PropsHello name="RAGHAVENDRA VADDI" id="342"></PropsHello>

          <td>
            <EventBind />
          </td>
          <td>
            <PropsHello name="TESTING PROPS" id="120"></PropsHello>
          </td>
        </tr>



        <tr>
          <td>
            <BrowserRouter>
              <HeaderComponent />
              <Routes>
                <Route path='/' element={<ListEmployeeComponents />}></Route>
                <Route path='/emp' element={<RetreiveListEmployees />}></Route>
                <Route path='/addEmployees' element={<EmployeesComponent />}></Route>
              </Routes>
              <FooterComponent />
            </BrowserRouter>
          </td>
        </tr>
        <tr>        
          <td>
            <UseStateHookImplement />
          </td>
          <td>
            <UseStateHookShortFormImplement />
          </td>
          <td>
            <UseReducerHookImplement />
          </td>
        </tr>
        <tr>
          <td>
            <UseEffectImplement />
          </td>
          <td>
            <UseLayoutEffectImplement />
          </td>
          <td>
            <UseRefImplement />
          </td>
        </tr>
        <tr>
          <td>
            <UseImperativeHandleImplement />
          </td>
          <td>
            <UseContextImplement />
          </td>
          <td>
            <UseMemoImplement />
          </td>
        </tr>
        <tr>
          <td>
            <DisplayValuesUsingState />
          </td>
        </tr>
        <tr>
          <td>
            <div className="App container mt-5">
              <h1>Dropdown Select Example</h1>
              <SingleSelect options={options} />
            </div>
          </td>
          <td>
            <div className="App container mt-5">
              <h1>Dropdown MultiSelect Example</h1>
              <MultiSelect options={options} />
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div className="App container mt-5 col-md-6">
              <RadioButtons />
            </div>
          </td>
          <td>
            <div className="App container mt-5 col-md-6">
              <Checkboxes />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="App container mt-5 col-md-12">
              <StudentForm />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="App container mt-5 col-md-12">
              <h1>Multiple Popup Windows</h1>
              <Button variant="primary" onClick={handleShowModal1}>
                Open First Modal
              </Button>
              <Button variant="secondary" onClick={handleShowModal2} className="ml-2">
                Open Second Modal
              </Button>
            </div>
            <ModalComponent
              showModal={showModal1}
              handleClose={handleCloseModal1}
              title="First Modal"
              content="This is the first modal."
            />
            <ModalComponent
              showModal={showModal2}
              handleClose={handleCloseModal2}
              title="Second Modal"
              content="This is the second modal."
            />

          </td>
          <td>
            <div className="App container mt-5 col-md-12">
              <h1>Prompt Modal Windows</h1>

              <button className="btn btn-primary" onClick={handleShowPrompt}>
                Show Prompt
              </button>
              <PromptModal
                showModal={showPrompt}
                handleClose={handleClosePrompt}
                handleOk={handleOk}
                title="Confirmation"
                message="Are you sure you want to proceed?"
              />

            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="App container mt-5 col-md-12">
              <h3>One way Binding</h3>

              <OnewayBinding message={message} />

            </div>

          </td>
          <td>
            <div className="App container mt-5 col-md-12">
              <h3>Two way Binding</h3>
              <TwowayBinding value={inputValue} onInputChange={handleInputChange} />
              <p>Current Value: {inputValue}</p>

            </div>

          </td>
        </tr>
        <tr>
          <td>
            <Container className="mt-5">
              <h1>React Modal Form Example</h1>
              <a href="#" onClick={handleShow3}>
                Open Form
              </a>
              <FormModal show={showModal3} handleClose={handleClose3} />
            </Container>
          </td>
        </tr>
        <tr>
          <td>

          </td>
        </tr>

      </table>




    </div>
  );
}

export default App;
