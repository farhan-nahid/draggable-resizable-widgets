import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import "./App.css";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const ResizableWidgets = () => {
  const [layouts, setLayouts] = useState({
    lg: [
      {
        w: 2,
        h: 2,
        x: 0,
        y: 0,
        i: "0",
        minW: 1,
        maxW: null,
        minH: 1,
        maxH: null,
        moved: false,
        static: false,
        isDraggable: true,
        isResizable: true,
      },
      {
        w: 2,
        h: 2,
        x: 2,
        y: 0,
        i: "1",
        minW: 1,
        maxW: null,
        minH: 1,
        maxH: null,
        moved: false,
        static: false,
        isDraggable: true,
        isResizable: true,
      },
      {
        w: 2,
        h: 2,
        x: 4,
        y: 0,
        i: "2",
        minW: 1,
        maxW: null,
        minH: 1,
        maxH: null,
        moved: false,
        static: false,
        isDraggable: true,
        isResizable: true,
      },
    ],
  });
  const [widgetArray, setWidgetArray] = useState([
    { i: "widget1", x: 0, y: 0, w: 2, h: 1, width: 1, height: 1 },
    { i: "widget2", x: 2, y: 0, w: 4, h: 2, width: 4, height: 2 },
    { i: "widget3", x: 6, y: 0, w: 2, h: 2, width: 1, height: 2 },
  ]);

  const handleModify = (layouts, layout) => {
    const tempArray = widgetArray;

    setLayouts(layout);
    layouts?.map((position) => {
      tempArray[Number(position.i)].x = position.x;
      tempArray[Number(position.i)].y = position.y;
      tempArray[Number(position.i)].width = position.w;
      tempArray[Number(position.i)].height = position.h;
    });
    setWidgetArray(() => tempArray);
  };

  return (
    <div>
      <ResponsiveReactGridLayout
        onLayoutChange={handleModify}
        verticalCompact={true}
        layout={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        preventCollision={false}
        cols={{ lg: 8, md: 8, sm: 4, xs: 2, xxs: 2 }}
        autoSize={true}
        margin={{
          lg: [20, 20],
          md: [20, 20],
          sm: [20, 20],
          xs: [20, 20],
          xxs: [20, 20],
        }}
      >
        {widgetArray?.map((widget, index) => {
          return (
            <div
              className="reactGridItem"
              key={index}
              data-grid={{
                x: widget?.x,
                y: widget?.y,
                w: widget?.w,
                h: widget?.h,
                i: widget.i,
                minW: 1,
                maxW: 5,
                minH: 1,
                maxH: 5,
                isDraggable: true,
                isResizable: true,
              }}
            >
              <div>{widget.i}</div>
            </div>
          );
        })}
      </ResponsiveReactGridLayout>
    </div>
  );
};

export default ResizableWidgets;
