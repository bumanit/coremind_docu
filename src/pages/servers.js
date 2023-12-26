import React from "react";
import Layout from "@theme/Layout";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import clsx from "clsx";

export default function Hello() {
  return (
    <Layout title="CoreMind Servers" description="CoreMind Servers">
      <main className="container container--fluid margin-vert--lg">
        <div className="row mdxPageWrapper_node_modules-@docusaurus-theme-classic-lib-theme-MDXPage-styles-module">
          <div className="col col--8">
            <h1>Servers</h1>
            <Tabs>
              <TabItem value="monos_v13" label="Monos v13" default>
                <table>
                  <thead>
                    <tr>
                      <th>Server</th>
                      <th>Type</th>
                      <th>Company</th>
                      <th>User Login</th>
                      <th>Cron / Service</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>10.0.0.51</td>
                      <td>Database</td>
                      <td>Monos group</td>
                      <td>Domain</td>
                      <td>Service</td>
                    </tr>
                    <tr>
                      <td>10.0.0.18</td>
                      <td>Database</td>
                      <td>Monos group</td>
                      <td>monoserp</td>
                      <td>Service</td>
                    </tr>
                    <tr>
                      <td>10.0.0.136</td>
                      <td>Application</td>
                      <td>Green Gate International</td>
                      <td>Domain</td>
                      <td>Service</td>
                    </tr>
                    <tr>
                      <td>10.0.0.137</td>
                      <td>Application</td>
                      <td>Monos Cosmetics</td>
                      <td>Domain</td>
                      <td>Service</td>
                    </tr>
                    <tr>
                      <td>10.0.0.146</td>
                      <td>Application</td>
                      <td>Monos Pharma</td>
                      <td>Domain</td>
                      <td>Service</td>
                    </tr>
                    <tr>
                      <td>10.0.0.148</td>
                      <td>Cron</td>
                      <td>Monos group</td>
                      <td>Domain</td>
                      <td>Service</td>
                    </tr>
                    <tr>
                      <td>10.0.0.165</td>
                      <td>Application</td>
                      <td>Monos Foods</td>
                      <td>Domain</td>
                      <td>Service</td>
                    </tr>
                    <tr>
                      <td>10.0.0.166</td>
                      <td>Application</td>
                      <td>Undram Khan Khangai</td>
                      <td>Domain</td>
                      <td>Service</td>
                    </tr>
                    <tr>
                      <td>10.0.0.167</td>
                      <td>Application</td>
                      <td>Monos Group, Thombo, Timus</td>
                      <td>Domain</td>
                      <td>Service</td>
                    </tr>
                    <tr>
                      <td>10.0.0.178</td>
                      <td>Application</td>
                      <td>delivery.monos.mn, api.monos.mn</td>
                      <td>Domain</td>
                      <td>Service</td>
                    </tr>
                  </tbody>
                </table>
              </TabItem>
              <TabItem value="monos_v10" label="Monos v10">
                <table>
                  <thead>
                    <tr>
                      <th>Server</th>
                      <th>Type</th>
                      <th>Company</th>
                      <th>User Login</th>
                      <th>Cron / Service</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>10.0.0.15</td>
                      <td>Application</td>
                      <td>Monos Group</td>
                      <td>monoserp</td>
                      <td>Service</td>
                    </tr>
                    <tr>
                      <td>10.0.0.16</td>
                      <td>Application</td>
                      <td>Monos Group</td>
                      <td>monoserp</td>
                      <td>Service</td>
                    </tr>
                    <tr>
                      <td>10.0.0.19</td>
                      <td>Application</td>
                      <td>Monos Group</td>
                      <td>monoserp</td>
                      <td>Service</td>
                    </tr>
                    <tr>
                      <td>10.0.0.22</td>
                      <td>Application</td>
                      <td>Monos Group</td>
                      <td>monoserp</td>
                      <td>Service</td>
                    </tr>
                    <tr>
                      <td>10.0.0.132</td>
                      <td>Application</td>
                      <td>Monos Group</td>
                      <td>monoserp</td>
                      <td>Service</td>
                    </tr>
                    <tr>
                      <td>10.0.0.182</td>
                      <td>Database</td>
                      <td>Monos Group</td>
                      <td>monoserp</td>
                      <td>Service</td>
                    </tr>
                  </tbody>
                </table>
              </TabItem>
              <TabItem value="monos_ub" label="Monos UB">
                <table>
                  <thead>
                    <tr>
                      <th>Server</th>
                      <th>Type</th>
                      <th>Company</th>
                      <th>User Login</th>
                      <th>Cron / Service</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>10.0.0.94</td>
                      <td>Database</td>
                      <td>Monos Ulaanbaatar</td>
                      <td>Domain</td>
                      <td>Service</td>
                    </tr>
                    <tr>
                      <td>10.0.0.95</td>
                      <td>Database replica</td>
                      <td>Monos Ulaanbaatar</td>
                      <td>Domain</td>
                      <td>Service</td>
                    </tr>
                    <tr>
                      <td>10.0.0.96</td>
                      <td>Application</td>
                      <td>Monos Ulaanbaatar</td>
                      <td>Domain</td>
                      <td>Service</td>
                    </tr>
                    <tr>
                      <td>10.0.0.126</td>
                      <td>Cron</td>
                      <td>Monos Ulaanbaatar</td>
                      <td>Domain</td>
                      <td>Service</td>
                    </tr>
                  </tbody>
                </table>
              </TabItem>
              <TabItem value="monos_on" label="Monos ON">
                <table>
                  <thead>
                    <tr>
                      <th>Server</th>
                      <th>Type</th>
                      <th>Company</th>
                      <th>User Login</th>
                      <th>Cron / Service</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>10.0.0.107</td>
                      <td>app</td>
                      <td>Monos ON</td>
                      <td>Domain</td>
                      <td>Service</td>
                    </tr>
                    <tr>
                      <td>10.0.0.127</td>
                      <td>cron</td>
                      <td>Monos ON</td>
                      <td>Domain</td>
                      <td>Service</td>
                    </tr>
                    <tr>
                      <td>10.0.0.105</td>
                      <td>db</td>
                      <td>Monos ON</td>
                      <td>Domain</td>
                      <td>Service</td>
                    </tr>
                    <tr>
                      <td>10.0.0.106</td>
                      <td>db replica</td>
                      <td>Monos ON</td>
                      <td>Domain</td>
                      <td>Service</td>
                    </tr>
                  </tbody>
                </table>
              </TabItem>
              <TabItem value="monos_other" label="Monos Other">
                <table>
                  <thead>
                    <tr>
                      <th>Server</th>
                      <th>Type</th>
                      <th>Company</th>
                      <th>User Login</th>
                      <th>Cron / Service</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>10.0.0.110</td>
                      <td>app, db, cron</td>
                      <td>Monos Pharma</td>
                      <td>Domain</td>
                      <td>Service</td>
                    </tr>
                    <tr>
                      <td>10.0.0.111</td>
                      <td>app, db, cron</td>
                      <td>Monos Foods</td>
                      <td>Domain</td>
                      <td>Service</td>
                    </tr>
                    <tr>
                      <td>10.0.0.112</td>
                      <td>app, db, cron</td>
                      <td>Monos Cosmetics</td>
                      <td>Domain</td>
                      <td>Service</td>
                    </tr>
                    <tr>
                      <td>10.0.0.113</td>
                      <td>app, db, cron</td>
                      <td>Monos Emonos</td>
                      <td>Domain</td>
                      <td>Service</td>
                    </tr>
                    <tr>
                      <td>10.0.0.114</td>
                      <td>app, db, cron</td>
                      <td>Monos GGI, Others</td>
                      <td>Domain</td>
                      <td>Service</td>
                    </tr>
                  </tbody>
                </table>
              </TabItem>
              <TabItem value="internal" label="Internal">
                <table>
                  <thead>
                    <tr>
                      <th>Server</th>
                      <th>Type</th>
                      <th>Version</th>
                      <th>Company</th>
                      <th>User Login</th>
                      <th>Cron / Service</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>10.0.0.147</td>
                      <td>V13</td>
                      <td>Application</td>
                      <td>Coremind LLC</td>
                      <td>Domain</td>
                      <td>Service</td>
                    </tr>
                    <tr>
                      <td>10.0.0.185</td>
                      <td>V13</td>
                      <td>Database</td>
                      <td>School</td>
                      <td>Domain</td>
                      <td>Docker</td>
                    </tr>
                    <tr>
                      <td>10.0.0.187</td>
                      <td>V13</td>
                      <td>Application, Database</td>
                      <td>Avlaa</td>
                      <td>Domain</td>
                      <td>Service</td>
                    </tr>
                  </tbody>
                </table>
              </TabItem>
              <TabItem value="saas" label="SaaS">
                <table>
                  <thead>
                    <tr>
                      <th>Server</th>
                      <th>Version</th>
                      <th>Type</th>
                      <th>Company</th>
                      <th>User Login</th>
                      <th>Cron / Service</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>10.0.0.157</td>
                      <td>V13</td>
                      <td>Application, Database</td>
                      <td>Internom LLC</td>
                      <td>Domain</td>
                      <td>Docker</td>
                    </tr>
                    <tr>
                      <td>10.0.0.170</td>
                      <td>V13</td>
                      <td>Application, Database</td>
                      <td>Gorgas LLC</td>
                      <td>Domain</td>
                      <td>Docker</td>
                    </tr>
                    <tr>
                      <td>10.0.0.171</td>
                      <td>V13</td>
                      <td>Application, Database</td>
                      <td>Alfacapital, Novaka, Obplastic2, Salary</td>
                      <td>Domain</td>
                      <td>Docker</td>
                    </tr>
                    <tr>
                      <td>10.0.0.172</td>
                      <td>V12</td>
                      <td>Application, Database</td>
                      <td>CoreMind V12</td>
                      <td>Domain</td>
                      <td>Docker</td>
                    </tr>
                    <tr>
                      <td>10.0.0.173</td>
                      <td>V13</td>
                      <td>Database</td>
                      <td>Test</td>
                      <td>Domain</td>
                      <td>Postgresql</td>
                    </tr>
                    <tr>
                      <td>10.0.0.174</td>
                      <td>V13</td>
                      <td>Application, Database</td>
                      <td>
                        Avlaa, Bando, Barilgachin, Barilgachin13, NBG, NBUYAN,
                        Odcon
                      </td>
                      <td>Domain</td>
                      <td>Docker</td>
                    </tr>
                    <tr>
                      <td>10.0.0.175</td>
                      <td>V12</td>
                      <td>Application, Database</td>
                      <td>
                        Internom, test-timeholding, test-training, timeholding
                      </td>
                      <td>Domain</td>
                      <td>Service</td>
                    </tr>
                    <tr>
                      <td>10.0.0.176</td>
                      <td>V12</td>
                      <td>Application, Database</td>
                      <td>cwmgl, test-cwmgl, odoo12db</td>
                      <td>Domain</td>
                      <td>Service</td>
                    </tr>
                    <tr>
                      <td>10.0.0.179</td>
                      <td>V13</td>
                      <td>Application, Database</td>
                      <td>cwmgl13, monhorus, gaikham</td>
                      <td>Domain</td>
                      <td>Service</td>
                    </tr>
                    <tr>
                      <td>10.0.0.183</td>
                      <td>V13</td>
                      <td>Application, Database</td>
                      <td>World Bridge Logistics</td>
                      <td>Domain</td>
                      <td>Docker</td>
                    </tr>
                    <tr>
                      <td>10.0.0.184</td>
                      <td>V13</td>
                      <td>Application, Database</td>
                      <td>Tod Us LLC</td>
                      <td>Domain</td>
                      <td>Docker</td>
                    </tr>
                    <tr>
                      <td>10.0.0.184</td>
                      <td>V13</td>
                      <td>Application, Database</td>
                      <td>Tod Us LLC</td>
                      <td>Domain</td>
                      <td>Docker</td>
                    </tr>
                    <tr>
                      <td>10.0.0.186</td>
                      <td>V13</td>
                      <td>Application, Database</td>
                      <td>Brickland</td>
                      <td>Domain</td>
                      <td>Docker</td>
                    </tr>
                    <tr>
                      <td>10.0.0.188</td>
                      <td>V13</td>
                      <td>Application, Database</td>
                      <td>FMCG</td>
                      <td>Domain</td>
                      <td>Docker</td>
                    </tr>
                    <tr>
                      <td>10.0.0.189</td>
                      <td>V13</td>
                      <td>Application, Database</td>
                      <td>Green Resources</td>
                      <td>Domain</td>
                      <td>Docker</td>
                    </tr>
                  </tbody>
                </table>
              </TabItem>
              <TabItem value="web" label="Web">
                <table>
                  <thead>
                    <tr>
                      <th>Server</th>
                      <th>Type</th>
                      <th>Name</th>
                      <th>User Login</th>
                      <th>Cron / Service</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>10.0.0.177</td>
                      <td>Application, Database</td>
                      <td>Loyalty</td>
                      <td>Domain</td>
                      <td>Apache, Web</td>
                    </tr>
                    <tr>
                      <td>10.0.0.180</td>
                      <td>Application, Database</td>
                      <td>
                        avlaamn, brickland, deliveryapp, ebarimt, guideline
                      </td>
                      <td>Domain</td>
                      <td>Apache, Web</td>
                    </tr>
                    <tr>
                      <td>10.0.0.182</td>
                      <td>Application, Database</td>
                      <td>avlaamn, cardgateway, deliveryapp, itmed, monosms</td>
                      <td>Domain</td>
                      <td>Apache, Web</td>
                    </tr>
                  </tbody>
                </table>
              </TabItem>
            </Tabs>
          </div>
        </div>
      </main>
    </Layout>
  );
}
