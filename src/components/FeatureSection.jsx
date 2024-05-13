import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import FeatureCard from "./FeatureCard";
import 'react-tabs/style/react-tabs.css'


const FeatureSection = () => {
  const [features, setFeatures] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/skillUp')
      .then(res => res.json())
      .then(result => {
        setFeatures(result)
        console.log(result)
      }).catch(error => console.log(error))
  }, [])
  return (
    <Tabs>
      <div className=' container px-6 py-10 mx-auto'>
        <h1 className='text-2xl font-semibold text-center  capitalize lg:text-3xl '>
          Feature Section
        </h1>

        <p className='max-w-2xl mx-auto my-6 text-center  '>
          Discover a range of revolutionary features tailored to modern needs. Smart AI integration streamlines tasks with predictive suggestions. Customizable interfaces ensure a user-centric experience. Enhanced security protocols safeguard data in an interconnected world.
        </p>
        <div className='flex items-center justify-center'>
          <TabList>
            <Tab>Easy</Tab>
            <Tab>Medium</Tab>
            <Tab>Hard</Tab>
          </TabList>
        </div>
        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 lg:grid-cols-3'>
            {features.filter(ass => ass.difficulty === 'Easy')
              .map(feature => (
                <FeatureCard key={feature._id} feature={feature} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 lg:grid-cols-3'>
            {features
              .filter(ass => ass.difficulty === 'Medium')
              .map(feature => (
                <FeatureCard key={feature._id} feature={feature} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 lg:grid-cols-3'>
            {features
              .filter(ass => ass.difficulty === 'Hard')
              .map(feature => (
                <FeatureCard key={feature._id} feature={feature} />
              ))}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default FeatureSection;