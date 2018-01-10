import React, {Component} from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchWeather} from '../actions/index'
import Ionicon from 'react-ionicons'
import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll'
import '../css/search_bar.css'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: ''}
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  onInputChange(event) {
    this.setState({term: event.target.value})
  }

  scrollToBottom() {
    scroll.scrollToBottom();
  }

  onFormSubmit(event) {
    event.preventDefault()
    this.props.fetchWeather(this.state.term, this.scrollToBottom)
  }

  render() {
    let error = null
    if (this.props.weather === "error") {
      error =
      <div className="error">
        Please enter a valid zipcode
      </div>
    }

    let loading = null

    if (this.props.weather === "requesting") {
      loading = <div className="loading">Loading...</div>
    }

    return (
        <section className="search_bar">

          <div className="wrapper">
            <h1>Weather app</h1>
            <h2>Type in your zip code to see how awful the weather is<br />in your area this week.</h2>
            {error}
            {loading}
            <form onSubmit={this.onFormSubmit} className="input-group">
              <input
                placeholder="000000"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange} />
                <div className="icon">
                  <Ionicon onClick={this.onFormSubmit} type="submit" icon="ios-arrow-round-down" fontSize="90px" color="white" />
                </div>
            </form>
          </div>
          <style jsx>{`
            .wrapper {
              padding: 10% 5%;
            }

            .icon {
              margin: 2% -2%;
            }

            h1 {
              color: white;
              font-family: Tiempos Headline Semibold;
              font-size: 40px;
              margin-bottom: 0px;
            }

            h2 {
              color: white;
              font-family: 'Apercu Pro';
              font-size: 20px;
              font-weight: 100;
              margin-bottom: 25px;
            }

            .search_bar {
              background-color: #d6482e;
              background-size: cover;
              height: 100vh;
              width: 100%;
              padding: 0;
              box-sizing: border-box;

            }

            .form-control {
              background-color: #d6482e;
              border: 2px solid white;
              width: 50%;
              height: 100px;
              font-size: 50px;
              color: white;
              padding: 0px 0px 0px 20px;
              font-family: Apercu Pro;
            }

            ::placeholder {
                color: #db7b6a;
                font-size: 50px;
                opacity: 1; /* Firefox */
            }

            :-ms-input-placeholder { /* Internet Explorer 10-11 */
               color: white;
               color: #db7b6a;
               font-size: 50px;
            }

            ::-ms-input-placeholder { /* Microsoft Edge */
               color: white;
               color: #db7b6a;
               font-size: 50px;
            }

          `}</style>
      </section>
    )
  }
}


function mapStateToProps({weather}) {
  return {weather}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {fetchWeather}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
