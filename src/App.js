import React, { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <br />

        <div class="jumbotron">
          <h1 class="display-3">
            I would like to help your company be even better!
          </h1>
          <p class="lead">Advocate of the following:</p>

          <li>80/20 rule for maximum impact</li>
          <li>Move fast; ask for forgiveness later</li>
          <hr class="my-4" />
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">
              Scroll on to learn more!
            </a>
          </p>
        </div>
        <br />

        <div
          class="card border-primary mb-3"
          style={{ width: "20rem", display: "inline-block" }}
        >
          <div class="card-header">Operations</div>
          <div class="card-body">
            <h4 class="card-title">Company wide feedback tool</h4>
            <p
              class="card-text"
              href="https://my-feedback-team-b-staging.herokuapp.com/"
            >
              Email integration and user authentication
            </p>
            <a
              href="https://my-feedback-team-b-staging.herokuapp.com/"
              class="card-link"
            >
              Click me
            </a>
          </div>
        </div>

        <div
          class="card border-primary mb-3"
          style={{ width: "20rem", display: "inline-block" }}
        >
          <div class="card-header">Operations</div>
          <div class="card-body">
            <h4 class="card-title">Team teamperature check for managers</h4>
            <p class="card-text">Dynamic rendering of graphs and stickies</p>
            <a
              href="https://teamtrainingorcheckin.herokuapp.com/"
              class="card-link"
            >
              Click me
            </a>
          </div>
        </div>
        <div
          class="card border-primary mb-3"
          style={{ width: "20rem", display: "inline-block" }}
        >
          <div class="card-header">Operations</div>
          <div class="card-body">
            <h4 class="card-title">Team data collection telegram bot</h4>
            <p class="card-text">
              Data tracking and collection via telegram on google sheets
            </p>
            <a href="https://web.telegram.org/#/im" class="card-link">
              Click me (add JumpStart Data)
            </a>
          </div>
        </div>
        <div
          class="card text-white bg-info mb-3"
          style={{ width: "20rem", display: "inline-block" }}
        >
          <div class="card-header">Sales</div>
          <div class="card-body">
            <h4 class="card-title">Telegram bot for quick sales</h4>
            <p class="card-text">
              Payments service (using Stripe) vis-a-vis telegram bot
            </p>
          </div>
        </div>

        <div
          class="card text-white bg-success mb-3"
          style={{ width: "20rem", display: "inline-block" }}
        >
          <div class="card-header">Customer care/ Internal Comms</div>
          <div class="card-body">
            <h4 class="card-title">Real-time WebChat using web-sockets</h4>
            <p class="card-text">
              Replica of simple real-time web-chat app for quick customer/team
              discussion
            </p>
            <a
              href="https://github.com/justintangjx/team-discussion-app"
              class="card-link"
            >
              Click me!
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
