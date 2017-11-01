{
    group: '', //
    asset: '',
    direction: $("input[name='S_Direction']:checked").val(),
    entry:$("#S_Entry").val(),
    expirary:$("#S_Expirary").val(),
    second:$("#S_Second").val(),
    ratio:$("#S_Ratio").val(),
    date: ("#S_Date").val()
}
/*
    GROUP: 'pro' or 'free'. 'pro' is default.
    ASSET: EUR/USD | GBP/USD | ...
    DIRECTION: Call or put
    ENTRY: Entry price
    EXPIRARY: Time to expirary
    SECOND: number
    RATIO: 80% or 90%
    DATE: Date as text
*/

/*

<div class="col-xs-12 col-sm-12 col-md-12 spaciado-tele section-trade animated object-visible fadeIn" data-animation-effect="fadeIn" data-effect-delay="100" id="tradeActual" style="display: block;">
  <p class="signaltype-med" id="signaltype">MEDIUM PROBABILITY</p>
  <div class="col-xs-11 col-sm-11 col-md-9 col-lg-7 position float-de mergin-te">
    <div class="col-xs-12">
      <p class="time" id="time">Mon, 30 Oct 2017 07:20:34 GMT</p>
    </div>
    <div class="col-xs-6 spa-le">
      <div class="spa_line">
        <p class="texto-blanco">ASSET</p>
        <p class="moneda" id="AssetActual">USD/CHF</p>
      </div>															
      <div class="col-xs-4 spa-line2 ">
        <p class="texto-blanco">ENTRY PRICE</p>
        <p class="texto-blanco tama" id="EntryPrice">0.99901</p>
      </div>
      <div class="col-xs-4 spa-line2 padin">
        <p class="texto-blanco">EXPIRACY</p>
        <p class="texto-blanco  tama" id="Expiracy">5min</p>
      </div>
      <div class="col-xs-4 spa-line2 padin2">
        <p class="texto-blanco">DIRECTION</p>
        <p class="tama texto-rojo" id="Direction">PUT</p>
      </div>
    </div>
  </div>
  
  <div class="col-xs-1 col-sm-1 col-md-3 col-lg-5 contador">
    <div class="circles">
      <div class="second circle circle2"><canvas width="150" height="150"></canvas>
        <strong>268<br><span class="texto">SECONDS</span></strong>
        <span class="priceactual" id="CurrentPrice" style="margin-top: -38px; bottom: 124px; color: rgb(2, 214, 59);">0.9989</span>
      </div>
    </div>
  </div>
</div>

*/