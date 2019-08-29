import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Nav = props => (<NavLink exact {...props} activeClassName="active" /> );


const LabelMaker = (iconName, labelText) => <span><Icon name={iconName} />{labelText}</span>;

// The label maker 

const LandingLabel = LabelMaker("Landing", "Landing Page");
const ArticleLabel = LabelMaker("Article", "Article Page");

// Pains...panes
const panes = [


    {menuItem: <Menu.Item key='Landing' as={Nav} to={`/`} content={LandingLabel} /> },  
    
    {menuItem: <Menu.Item key='Article' as={Nav} to={`/ArticlePage`} content={ArticleLabel} /> }  
    
  

]


// Ship it
const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />;


export default TabNav;