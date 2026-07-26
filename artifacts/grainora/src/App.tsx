import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import { CustomCursor } from '@/components/cursor/CustomCursor';
import { LenisProvider } from '@/components/layout/LenisProvider';

// Pages
import Home from '@/pages/Home';
import Products from '@/pages/Products';
import Contact from '@/pages/Contact';
import GenericPage from '@/pages/GenericPage';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/contact" component={Contact} />
      
      {/* Reusing generic page for others to save time while keeping navigation alive */}
      <Route path="/company">
        <GenericPage title="Our Story" subtitle="Born in Bodoland. Built for the world." />
      </Route>
      <Route path="/quality">
        <GenericPage title="Quality Standards" subtitle="Exceeding international food safety guidelines." />
      </Route>
      <Route path="/sustainability">
        <GenericPage title="Sustainability" subtitle="Earth-forward initiatives and community impact." />
      </Route>
      <Route path="/distributor">
        <GenericPage title="Distributor Network" subtitle="Join our global presence across 25+ countries." />
      </Route>
      <Route path="/newsroom">
        <GenericPage title="Newsroom" subtitle="Latest press releases and announcements." />
      </Route>
      <Route path="/careers">
        <GenericPage title="Careers" subtitle="Join the team building the future of food." />
      </Route>
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <LenisProvider>
            <CustomCursor />
            <Router />
          </LenisProvider>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
