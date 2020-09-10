import React from "react";
import ReactLoading from "react-loading";
import { Section, Prop} from "./generic";
import '../../styles/Loading.css'

const Loading = () => {
  return(
    <Section>
      <ReactLoading type={'spokes'} color="#736F72"/>
      <Prop>{'spokes'.name}</Prop>
    </Section>
  )
}

export default Loading