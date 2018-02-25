const React = require('react');
const ReactRouter = require('react-router-dom');
require('./index.css');

const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const PersonalDetail = require('./components/PersonalDetail');
const FamilyDetail = require('./components/FamilyDetail');
const Nav = require('./components/Nav');

class App extends React.Component {
    render() {
       return (
           <Router>
               <div className="containerStyle">
                   <div className="formWrapperStyle">
                       <div className="headerStyle">
                           <h3 className="headerTextStyle">Application Form</h3>
                       </div>
                       <Switch>
                           <Route exact path="/" component={PersonalDetail} />
                           <Route exact path="/family" component={FamilyDetail} />
                           <Route render={() => {
                                return <p>Error 404: Not Found</p>;
                            }} />
                       </Switch>
                       <div className="progressSectionStyle">
                           Progress Bar Section
                       </div>
                       <div className="navSectionStyle">
                        <Nav />
                       </div>
                   </div>
               </div>
           </Router>
       );
   }
}

module.exports = App;