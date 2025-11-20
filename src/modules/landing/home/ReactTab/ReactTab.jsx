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
        <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl text-gray-900 font-extrabold text-center mb-4 drop-shadow-xl animate-pulse">
            Explore Our Offerings
          </h2>
          <p className="mt-2 max-w-2xl mx-auto hover:text-gray-300 transition-colors duration-300">
            Discover amazing tour packages or connect with our expert guides
          </p>
        </div>

        <Tabs className="rounded-xl overflow-hidden backdrop-blur-sm shadow-2xl transition-all duration-500 group">
          <TabList className="flex flex-wrap border-b bg-black/30 backdrop-blur-sm relative overflow-hidden">
            <Tab
              className="py-4 px-8 font-semibold text-lg cursor-pointer transition-all duration-500 relative z-10
              hover:bg-opacity-20
              ui-selected:font-bold ui-selected:rounded-md ui-selected:shadow-md ui-selected:border-b-2
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900
              group/tab overflow-hidden"
            >
              <span className="relative z-10 drop-shadow-sm">Our Packages</span>
            </Tab>

            <Tab
              className="py-4 px-8 font-semibold text-lg cursor-pointer transition-all duration-500 relative z-10
              hover:bg-opacity-20
              ui-selected:font-bold ui-selected:rounded-md ui-selected:shadow-md ui-selected:border-b-2
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900
              group/tab overflow-hidden"
            >
              <span className="relative z-10 drop-shadow-sm">
                Meet Our Tour Guides
              </span>
            </Tab>
          </TabList>

          <TabPanel className="p-4 md:p-6 rounded-b-xl shadow-inner transition-all duration-500 hover:backdrop-blur-lg relative overflow-hidden group/panel">
            <div className="relative z-10">
              <Packages apiEndpoint="packages/random" />
            </div>
          </TabPanel>

          <TabPanel className="p-4 md:p-6 rounded-b-xl shadow-inner transition-all duration-500 hover:backdrop-blur-lg relative overflow-hidden group/panel">
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
