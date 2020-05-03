import React from "react"
import Layout from "../components/layout"
import MainBox from "../components/MainBox"

const Contact = () => <Layout>
  <MainBox>
  	<form name="contact" method="post" netlify-honeypot="bot-field" data-netlify="true">
    <input type="hidden" name="bot-field" />
  	<p>
  	  <label>Your Name: <input type="text" name="name" /></label>   
  	</p>
  	<p>
  	  <label>Your Email: <input type="email" name="email" /></label>
  	</p>
  	<p>
  	  <label>Your Role: <select name="role[]" multiple>
  	    <option value="leader">Leader</option>
  	    <option value="follower">Follower</option>
  	  </select></label>
  	</p>
  	<p>
  	  <label>Message: <textarea name="message"></textarea></label>
  	</p>
  	<p>
  	  <button type="submit">Send</button>
  	</p>
  </form>
  </MainBox>
</Layout>

export default Contact
