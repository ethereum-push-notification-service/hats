import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import classNames from "classnames";
import { useVaults } from "hooks/useVaults";
import { useCallback, useState } from "react";
import RedeemWalletSuccessIcon from "assets/icons/wallet-nfts/wallet-redeem-success.svg";
import "./index.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { NFTCard, Loading, RedeemNftSuccess } from "components";
import { useSelector } from "react-redux";
import { RootState } from "reducers";
import { ScreenSize } from "constants/constants";
import { INFTTokenInfoRedeemed } from "types/types";

export default function EmbassyNftTicketPrompt() {
  const { t } = useTranslation();
  const { screenSize } = useSelector((state: RootState) => state.layoutReducer);
  const { nftData } = useVaults();
  const [loading, setLoading] = useState(false);
  const [redeemed, setRedeemed] = useState<INFTTokenInfoRedeemed[] | undefined>();

  const showLoader = !redeemed && loading;

  const handleRedeem = useCallback(async () => {
    if (!nftData?.proofRedeemables) return;
    setLoading(true);
    const tx = await nftData?.redeemProof();
    if (tx?.status) {
      const refreshed = await nftData?.refreshRedeemed();
      const redeemed = refreshed?.filter(nft => nft.isRedeemed &&
        nftData.proofRedeemables?.find(r => r.tokenId.eq(nft.tokenId)));
      setRedeemed(redeemed);
    }

    setLoading(false);
  }, [nftData]);

  if (redeemed) return <RedeemNftSuccess redeemed={redeemed} />;
  return (
    <div className={classNames("embassy-nft-ticket-wrapper", { "disabled": showLoader })}>
      <img className="embassy-nft-ticket__icon" src={RedeemWalletSuccessIcon} alt="wallet" />
      <div className="embassy-nft-ticket__title">{t("EmbassyNftTicketPrompt.title")}</div>
      {t("EmbassyNftTicketPrompt.text")}
      <Swiper
        spaceBetween={20}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={screenSize === ScreenSize.Mobile ? 1 : 2}
        speed={500}
        touchRatio={1.5}
        navigation
        effect={"flip"}>
        {nftData?.proofRedeemables?.map((nftInfo, index) =>
          <SwiperSlide key={index}>
            <NFTCard key={index} tokenInfo={nftInfo} />
          </SwiperSlide>)}
      </Swiper>
      <button onClick={handleRedeem} className="embassy-nft-ticket__redeem-btn fill">{t("EmbassyNftTicketPrompt.button-text")}</button>
      {showLoader && <Loading />}
    </div>
  )
}
