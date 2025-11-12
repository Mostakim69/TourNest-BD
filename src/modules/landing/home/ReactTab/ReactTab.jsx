import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Packages from "../../../Packages/Packages/Packages";
import RandomGuides from "../RandomGuides/RandomGuides";

const ReactTab = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold glow-text hover:scale-105 text-gray-900 transition-transform duration-300">
            Explore Our Offerings
          </h2>
          <p className="mt-2 max-w-2xl mx-auto hover:text-gray-300 transition-colors duration-300">
            Discover amazing tour packages or connect with our expert guides
          </p>
        </div>

        <Tabs className="rounded-xl overflow-hidden backdrop-blur-sm glow-border bg-opacity-10 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 group">
          <TabList className="flex flex-wrap border-b border-blue-500 bg-black/30 backdrop-blur-sm relative overflow-hidden">
            {/* Sliding indicator background */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <Tab
              className="py-4 px-8 font-semibold text-lg cursor-pointer transition-all duration-500 relative z-10
              text-gray-300 hover:text-white hover:bg-blue-500/20
              ui-selected:bg-blue-600 ui-selected:text-white ui-selected:font-bold ui-selected:rounded-md ui-selected:shadow-md ui-selected:border-b-2 ui-selected:border-blue-500
              focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-gray-900
              group/tab overflow-hidden"
            >
              <span className="relative z-10 drop-shadow-sm">Our Packages</span>
            </Tab>

            <Tab
              className="py-4 px-8 font-semibold text-lg cursor-pointer transition-all duration-500 relative z-10
              text-gray-300 hover:text-white hover:bg-purple-500/20
              ui-selected:bg-purple-600 ui-selected:text-white ui-selected:font-bold ui-selected:rounded-md ui-selected:shadow-md ui-selected:border-b-2 ui-selected:border-purple-500
              focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:ring-offset-2 focus:ring-offset-gray-900
              group/tab overflow-hidden"
            >
              <span className="relative z-10 drop-shadow-sm">Meet Our Tour Guides</span>
            </Tab>
          </TabList>

          <TabPanel className="p-4 md:p-6 bg-opacity-30 rounded-b-xl shadow-inner pulse-glow transition-all duration-500 hover:bg-opacity-40 hover:backdrop-blur-lg relative overflow-hidden group/panel">
            <div className="absolute inset-0 opacity-0 group-hover/panel:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-4 right-4 w-16 h-16 bg-cyan-400/10 rounded-full blur-xl opacity-0 group-hover/panel:opacity-100 transition-opacity duration-700 animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-purple-400/10 rounded-full blur-xl opacity-0 group-hover/panel:opacity-100 transition-opacity duration-700 animate-pulse delay-300"></div>
            <div className="relative z-10">
              <Packages apiEndpoint="packages/random" />
            </div>
          </TabPanel>

          <TabPanel className="p-4 md:p-6 bg-opacity-30 rounded-b-xl shadow-inner jhilimili-glow transition-all duration-500 hover:bg-opacity-40 hover:backdrop-blur-lg relative overflow-hidden group/panel">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover/panel:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-4 left-4 w-20 h-20 bg-purple-400/10 rounded-full blur-xl opacity-0 group-hover/panel:opacity-100 transition-opacity duration-700 animate-pulse"></div>
            <div className="absolute bottom-4 right-4 w-14 h-14 bg-pink-400/10 rounded-full blur-xl opacity-0 group-hover/panel:opacity-100 transition-opacity duration-700 animate-pulse delay-500"></div>
            <div className="relative z-10">
              <RandomGuides />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default ReactTab;