import React, { Component } from 'react';
import "./Notification.css";

import {
  feedback_database,
  suggestion_database,
  report_database,
} from "./moddatabase";

import { database } from "./moddatabase";


class Notification extends Component {

    render() { 
        return (<>
            <main>
                <section id="home">
                    <div>
                        <h1>Hello Fellas</h1>
                    </div>
                </section>
            </main>
        </>);
    }
}
 
export default Notification;