import * as React from 'react';
import { render, screen } from '@testing-library/react';

const LazyComponent = React.lazy(() => import('../LazyComponent'));

function Main() {
  return (
    <div>
      <div>Lazy loaded component is here:</div>
      <LazyComponent />
    </div>
  );
}

function App() {
  return (
    <React.Suspense fallback="loading...">
      <Main />
    </React.Suspense>
  );
}

test('renders lazy', async () => {
  render(
    <React.Suspense fallback="test loading">
      <Main />
    </React.Suspense>
  );
  const lazyElement = await screen.findByText(/i am lazy/i);
  expect(lazyElement).toBeInTheDocument();
});

test('app renders stuff!', async () => {
  render(<App />);
  const lazyElement = await screen.findByText(/i am lazy/i);
  expect(lazyElement).toBeInTheDocument();
});
