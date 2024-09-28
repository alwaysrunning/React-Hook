import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from '@/routes';
import useErrorBoundary from 'use-error-boundary';
import { Layout, PageLoading } from '@/components';
import { REACT_APP_BASENAME } from '@/configs';


const RootRouter = () => {
  const { ErrorBoundary } = useErrorBoundary();
  return (
    <BrowserRouter basename={REACT_APP_BASENAME}>
      <ErrorBoundary>
        <Layout>
          <Routes>
            {routes.map((route, index) => (
              <Route
                {...route}
                key={index}
                element={
                  <Suspense fallback={<PageLoading />}>
                    {route.element}
                  </Suspense>
                }
              />
            ))}
          </Routes>
        </Layout>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default RootRouter;
