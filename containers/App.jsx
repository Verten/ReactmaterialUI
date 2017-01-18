import { Component } from "react"
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import {spacing, typography} from 'material-ui/styles'
import {white, blue600} from 'material-ui/styles/colors'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router'
import Data from '../src/data';
// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import theme from '../src/material_ui_raw_theme_file'


class App extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
    this.handleClickMenu = this.handleClickMenu.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidMount() {

  }

  componentWillMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  handleClickMenu() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  handleClose() {
    this.setState({
      isOpen: false,
    })
  }

  render() {
    const isOpen = this.state.isOpen

    const paddingLeftDrawerOpen = 236
    const marginTopDrawer = 64

    const styles = {
      header: {
        paddingLeft: isOpen ? paddingLeftDrawerOpen : 24,
      },
      logo: {
        cursor: 'pointer',
        fontSize: 22,
        color: typography.textFullWhite,
        lineHeight: `${spacing.desktopKeylineIncrement}px`,
        fontWeight: typography.fontWeightLight,
        backgroundColor: blue600,
        paddingLeft: 40,
        height: 56,
      },
      menuItem: {
        color: white,
        fontSize: 14
      },
      avatar: {
        div: {
          padding: '15px 0 20px 15px',
          backgroundImage: 'url(' + require('../images/material_bg.png') + ')',
          height: 45
        },
        icon: {
          float: 'left',
          display: 'block',
          marginRight: 15,
          boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
        },
        span: {
          paddingTop: 12,
          display: 'block',
          color: 'white',
          fontWeight: 300,
          textShadow: '1px 1px #444'
        }
      },
      leftDrawer: {
        marginTop: marginTopDrawer,
      },
      container: {
        margin: '20px 20px 20px 15px',
        paddingLeft: isOpen ? paddingLeftDrawerOpen : 0,
      },
    }
    return (
      <div>
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <AppBar
              style={styles.header}
              title='Material UI'
              iconElementLeft={isOpen ? <IconButton><NavigationClose /></IconButton> :
                <IconButton><NavigationMenu /></IconButton>}
              onLeftIconButtonTouchTap={this.handleClickMenu}
            />
            <Drawer
              open={isOpen}
              docked={false}
              onRequestChange={(open) => this.setState({ isOpen: open })}
            >
              <div style={styles.logo}>
                IAM PORTAL
              </div>
              <div style={styles.avatar.div}>
                <Avatar src="http://www.material-ui.com/images/uxceo-128.jpg"
                        size={40}
                        style={styles.avatar.icon}/>
                <span style={styles.avatar.span}>Admin</span>
              </div>
              <div>
                {
                  Data.menus.map((menu, index) => {
                    return <MenuItem
                      key={index}
                      style={styles.menuItem}
                      primaryText={menu.text}
                      leftIcon={menu.icon}
                      onTouchTap={this.handleClose}
                      containerElement={<Link to={menu.link}/>}
                    />
                  })
                }
              </div>
            </Drawer>
            <div style={styles.container}>
              {this.props.children}
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
