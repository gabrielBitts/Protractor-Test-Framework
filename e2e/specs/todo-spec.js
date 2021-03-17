const { element, by, browser } = require("protractor");

describe('Amazon buying page', function() {
    it('should find an available PS5', function() {
      //browser.get('https://www.amazon.com.br/dp/B088GNRX3J/ref=s9_acss_bw_cg_HeroVG_1a1_w?pf_rd_m=A3RN7G7QC5MWSZ&pf_rd_s=merchandised-search-5&pf_rd_r=HXYVSMZGR259EQ0NZKWF&pf_rd_t=101&pf_rd_p=77a4af07-b03d-498f-9c59-51c9513d27bc&pf_rd_i=21362266011');
      browser.waitForAngularEnabled(false);
      browser.get('https://www.amazon.com.br/Tomie-1-2-Junji-Ito/dp/6586672376/ref=pd_rhf_ee_s_pd_crcd_2?pd_rd_w=Hc20g&pf_rd_p=b762b69e-2f69-438e-86c7-b1c583041006&pf_rd_r=6Z40V9K0ANFKSQ7KVH88&pd_rd_r=61b94971-1c0e-46cc-ac62-320db3a797e7&pd_rd_wg=wrY2K&pd_rd_i=6586672376&psc=1');

      var buyButton = element(by.id('add-to-cart-button'));
      expect(buyButton.isDisplayed()).toBe(true);
    });
  });