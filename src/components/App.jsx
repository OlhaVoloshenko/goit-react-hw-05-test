import { Switch, Route } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import Container from 'components/Container/Container';
import AuthorsView from 'viewes/AuthorsView';
import BooksView from 'viewes/BooksView';
import HomeView from 'viewes/HomeView';
import NotFoundView from 'viewes/NotFoundView';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/authors">
          <AuthorsView />
        </Route>
        <Route path="/books">
          <BooksView />
        </Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
}
