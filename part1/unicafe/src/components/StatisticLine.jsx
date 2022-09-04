import React from "react";

function StatisticLine(props) {
  const { text, value } = props;
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td style={{ columnWidth: "50px" }}>{text}</td>
            <td>{value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StatisticLine;
