import React from 'react';
import Layout from '../components/layout';
import { useTheme } from '../utils/themeContext';

export default function Index() {
  const { toggleTheme } = useTheme();
  return (
    <Layout>
      <div className="bg-background">
        <p className="text-primaryText">taichia</p>
        <div className="text-center">
          <button className=" " onClick={toggleTheme}>
            Toggle theme
          </button>
        </div>
      </div>
    </Layout>
  );
}
