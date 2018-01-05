import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';

class FAQ extends Component {
  render() {
    return (
    <div>
      <div className="faq-fixed-menu" data-spy="affix" data-offset-top="107">
        <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current">
          <li><a href="#section-1">section 1</a></li>
          <li><a href="#section-2">section 2</a></li>
          <li><a href="#section-3">section 3</a></li>
        </Scrollspy>
      </div>
      <div>
        <section className="height" id="section-1">section 1</section>
        <section className="height" id="section-2">section 2</section>
        <section className="height" id="section-3">section 3</section>
      </div>
    </div>
    );
  }
}

export default FAQ;
