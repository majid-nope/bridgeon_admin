import React, { useState } from 'react'
import style from './Hub.module.scss'
import { Tab, Tabs, ThemeProvider, createTheme } from '@mui/material'

import { TabsRoute } from './Tabs/TabsRoute';
const Hub = () => {
  const [activeTab, seTab] = useState(0)
  const handleChange = (e, value) => {
    console.log(value);
    seTab(value)
  }


  const theme = createTheme({
    palette: {
      secondary: {

        main: '#11cb5f',
      },
    },
  });

 

  return (
    <div className={style.hub}>
      <div className={style.header}>
        <span className={style.title}>Hub</span>
        <div className={style.sessions}>


          <ThemeProvider theme={theme}>

            <Tabs value={activeTab} onChange={handleChange} aria-label="user tabs" textColor="secondary" indicatorColor="secondary"  >
              <Tab label="General" sx={{ color: "white" }} />
              <Tab label="User activity" sx={{ color: "white" }} />
              <Tab label="User performance" sx={{ color: "white" }} />
            </Tabs>
          </ThemeProvider>



        </div>
      </div>

      <div className={style.body}>
        <TabsRoute index={activeTab} />
      </div>
    </div>
  )
}

export default Hub