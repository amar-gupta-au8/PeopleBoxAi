import React from 'react';
import { Route, Switch } from 'react-router-dom';
const Home = React.lazy(() => import('../container/Home'));
const Sidebar = React.lazy(() => import('../Components/Sidebar'));
const AddNote = React.lazy(() => import('../container/AddNotesPage'));
const NotFound = React.lazy(() => import('../container/NotFoundPage'));

const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={() => <Sidebar Render={Home} />} />
        <Route
          exact
          path='/create'
          render={() => <Sidebar Render={AddNote} />}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
export default AppRouter;
