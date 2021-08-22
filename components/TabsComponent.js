import React, { useState } from 'react';
import { Tabs } from 'antd';
import dynamic from 'next/dynamic'
const CarouselTabs = dynamic(() => import('./CarouselTabs'),
  { ssr: false }
)
const { TabPane } = Tabs;

const TabsComponent = () => {
  const [keys, setKey] = useState('1');

  function callback(key) {
    console.log(key);
    setKey(key);
  }
  return (
    <Tabs
      defaultActiveKey="1"
      onChange={callback}
    >
      {/* <TabPane tab={<button className={`btn-tab py-1 ${width > 600 ? 'py-2 mx-3' : 'py-1 mx-1'} ${keys === '1' ? 'active-t' : ''} text-uppercase`}>Recent</button>} key="1"> */}
      <TabPane tab={<button className={`btn-tab py-1  ${keys === '1' ? 'active-t' : ''} text-uppercase`}>Recent</button>} key="1">
        {/* Content of Tab Pane 1 */}
        <div className="pb-5 mb-5">

          <CarouselTabs />

        </div>

      </TabPane>

      <TabPane tab={<button className={`btn-tab py-1 ${keys === '2' ? 'active-t' : ''} text-uppercase`}>Events</button>} key="2">
        {/* Content of Tab Pane 2 */}
        {/* splide js carousel */}
        <div className="pb-5 mb-5">


          <CarouselTabs />
        </div>

      </TabPane>

      <TabPane tab={<button className={`btn-tab py-1  ${keys === '3' ? 'active-t' : ''} text-uppercase`}>Things to do</button>} key="3">
        {/* Content of Tab Pane 3 */}
        <div className="pb-5 mb-5">

          <CarouselTabs />
        </div>
      </TabPane>
    </Tabs >
  );
}

export default TabsComponent
