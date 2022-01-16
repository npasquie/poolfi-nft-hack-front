import { useEffect, useState } from "react";

const BorrowModal = ({ setShowModal, setApproved }) => {
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);
  const [signed, setSigned] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const handleApproval = () => {
    if (signed) {
      setLoading(true);

      setTimeout(() => {
        setApproved(true);
        setFinished(true);
        setLoading(false);
      }, 4000);
    } else {
      console.log("Call smart contract function here");
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setSigned(true);
      }, 3000);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 200);
  }, []);

  const getButtonText = () => {
    if (finished) return "View Transaction";

    return signed ? (loading ? "Transaction pending..." : "Borrow 642 USDC") : loading ? "Signing..." : "Approve";
  };

  return (
    <div className={`modal-backdrop ${fadeIn ? "fade-in" : ""}`}>
      <div className="modal">
        <div className="modal-container">
          {finished ? (
            <>
              <div className="modal-text">Lil Pudgy #4267</div>
              <div className="modal-countdown">Success!</div>
            </>
          ) : (
            <>
              <div className="modal-text">Deadline until repayment:</div>
              <div className="modal-countdown">16 days, 9 hours, 12 minutes</div>
            </>
          )}

          <hr className="modal-hr" />

          <div className="modal-info">
            <div className="modal-row">
              <span className="modal-text">You will receive:</span>
              <span className="modal-text modal-text--bold">642 USDC</span>
            </div>
            <div className="modal-row">
              <span className="modal-text">Interest rate:</span>
              <span className="modal-text modal-text--bold">8.62%</span>
            </div>
            <div className="modal-row">
              <span className="modal-text">Maximum repayment:</span>
              <span className="modal-text modal-text--bold">729.59 USDC</span>
            </div>
          </div>

          <button className="modal-close" onClick={() => setShowModal(false)}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.5 18.4375C21.0625 19.0625 21.0625 20 20.5 20.5625C19.875 21.1875 18.9375 21.1875 18.375 20.5625L11 13.125L3.5625 20.5625C2.9375 21.1875 2 21.1875 1.4375 20.5625C0.8125 20 0.8125 19.0625 1.4375 18.4375L8.875 11L1.4375 3.5625C0.8125 2.9375 0.8125 2 1.4375 1.4375C2 0.8125 2.9375 0.8125 3.5 1.4375L11 8.9375L18.4375 1.5C19 0.875 19.9375 0.875 20.5 1.5C21.125 2.0625 21.125 3 20.5 3.625L13.0625 11L20.5 18.4375Z"
                fill="#141414"
              />
            </svg>
          </button>

          <div className={`modal-tos ${loading || finished ? "disabled" : ""}`}>
            <input type="checkbox" id="accept" onChange={e => setAccepted(e.target.checked)} />
            <label for="accept" className="modal-text">
              I have read and agreed on the <u>terms of service</u>
            </label>
          </div>

          <button onClick={() => handleApproval()} className="btn btn--approve" disabled={!accepted || loading}>
            {getButtonText()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BorrowModal;
