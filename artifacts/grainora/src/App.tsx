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
import OurStory from '@/pages/OurStory';
import GenericPage from '@/pages/GenericPage';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/contact" component={Contact} />

      {/* Company */}
      <Route path="/company" component={OurStory} />

      {/* Remaining pages (temporarily using GenericPage) */}
      <Route path="/quality">
        <GenericPage
          title="Quality Standards"
          subtitle="Every Grainora product undergoes quality checks, with laboratory testing forming an important part of our quality assurance process."
        />
      </Route>

      <Route path="/sustainability">
        <GenericPage
          title="Sustainability"
          subtitle="Growing responsibly for a better future."
        />
      </Route>

      <Route path="/distributor">
        <GenericPage
          title="Distributor Network"
          subtitle="Growing Together Across Global Markets."
        />
      </Route>

      <Route path="/newsroom">
        <GenericPage
          title="Newsroom"
          subtitle="Latest News & Updates."
        />
      </Route>

      <Route path="/careers">
        <GenericPage
          title="Careers"
          subtitle="Build the Future with Grainora."
        />
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