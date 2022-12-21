import React from "react";
import Layout from "@theme/Layout";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import clsx from "clsx";

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        className="col col--8"
        style={{
          padding: "60px 120px",
        }}
      >
        <h1>Servers</h1>
        {/* <Headers></Headers> */}
        <Tabs>
          <TabItem value="monos" label="Monos" default>
            <table>
              <thead>
                <tr>
                  <th>Server</th>
                  <th>Version</th>
                  <th>Type</th>
                  <th>Company</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10.0.0.15</td>
                  <td>v10</td>
                  <td>app</td>
                  <td>Monos group</td>
                  <td>monoserp</td>
                  <td>service</td>
                  <td>nginx</td>
                </tr>
                <tr>
                  <td>10.0.0.16</td>
                  <td>v10</td>
                  <td>app</td>
                  <td>Monos group</td>
                  <td>monoserp</td>
                  <td>service</td>
                  <td>nginx</td>
                </tr>
                <tr>
                  <td>10.0.0.19</td>
                  <td>v10</td>
                  <td>app</td>
                  <td>Monos group</td>
                  <td>monoserp</td>
                  <td>service</td>
                  <td>nginx</td>
                </tr>
                <tr>
                  <td>10.0.0.132</td>
                  <td>v10</td>
                  <td>app</td>
                  <td>Monos group</td>
                  <td>monoserp</td>
                  <td>service</td>
                  <td>nginx</td>
                </tr>
              </tbody>
            </table>
          </TabItem>
          <TabItem value="saas" label="SaaS">
            This is an orange 🍊
          </TabItem>
          <TabItem value="banana" label="Docker">
            This is a banana 🍌
          </TabItem>
        </Tabs>
      </div>
    </Layout>
  );
}
