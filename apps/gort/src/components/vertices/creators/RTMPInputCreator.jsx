
import React from "react";

import BaseCreator from "./BaseCreator";
import style from "../VertexCreate.scss";

export default class RTMPInputCreator extends BaseCreator {

  getDefaultVertex(params) {
    const v = super.getDefaultVertex(params);
    v.type = "RTMPInput";
    v.outputs.video = {};
    v.outputs.audio = {};
    v.params.rtmp = {
      url: ""
    };
    v.params.offsetTime = 0;
    return v;
  }

  getFields(v) {
    return super.getFields(v).concat([(
      <label key="params.rtmp.url" className={style.BlockLabel}>
        <span>RTMP URL</span>
        <input type="text" value={v.params.rtmp.url} onChange={this.setField("params.rtmp.url")} />
      </label>
    ),(
      <label key="params.offsetTime" className={style.BlockLabel}>
        <span>Offset Time (ms)</span>
        <input type="text" value={v.params.offsetTime} onChange={this.setField("params.offsetTime")} />
      </label>
    )]);
  }
}
