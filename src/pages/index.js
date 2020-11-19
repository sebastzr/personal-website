import React from "react"
import Layout from "../components/layout"
import indexStyles from "./index.module.scss"

export default function Home() {
  return (
    <div>
      <Layout>
        <div className={indexStyles.background}></div>
        <div className={indexStyles.container}>
          <div className={indexStyles.intro}>
            <h1 className={indexStyles.title}>Turning ideas into reallity</h1>
            <h3>Engineering, investigation & full-stack development</h3>
          </div>
          <div className={indexStyles.info}>
            <div className={indexStyles.infoItem}>
              <h4>Systems and Computing Engineer</h4>
              <p>
                Universidad Tecnológica de Pereira, Colombia <br />
                Masters student
              </p>
            </div>
            <div className={indexStyles.line}></div>
            <div className={indexStyles.infoItem}>
              <h4>Self-taught Developer</h4>
              <p>Full-stack, graphic design & prototyping</p>
            </div>
            <div className={indexStyles.line}></div>
            <div className={indexStyles.infoItem}>
              <h4>AI Investigator</h4>
              <p>
                Artificial inteliggence for drug design & CNN for malaria
                detection
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
