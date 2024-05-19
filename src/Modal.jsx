import React, { useState } from "react";
import { Modal } from "antd";
import { space } from "postcss/lib/list";

function CustomeModal({ isModalOpen, setIsModalOpen, selectedProduct }) {
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  console.log(selectedProduct);
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <Modal
        title="Detail"
        onCancel={handleCancel}
        open={isModalOpen}
        footer={""}
      >
        <div className="flex flex-col ">
          <img
            className="w-[200px] mx-auto"
            src={selectedProduct.ImagePath}
            alt=""
          />
          <p className="font-bold">{selectedProduct.Description}</p>
          <a
            href={selectedProduct.DataSheetUrl}
            className=" font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
          >
            DataSheetUrl
          </a>
          <p>
            <span className="font-bold">Category : </span>{" "}
            {selectedProduct.Category}
          </p>
          <p>
            <span className="font-bold">Manufacture : </span>
            {selectedProduct.Manufacture}
          </p>
          <p>
            <span className="font-bold">Manufacture PartNumber : </span>
            {selectedProduct.ManufacturePartNumber}
          </p>
          <p>
            <span className="font-bold">Lifecycle Status : </span>
            {selectedProduct.LifecycleStatus}
          </p>
          <p>
            <span className="font-bold">LeadTime : </span>
            {selectedProduct.LeadTime}
          </p>
          <p>
            <span className="font-bold">MouserPartNumber : </span>
            {selectedProduct.MouserPartNumber}
          </p>
          <p>
            <span className="font-bold">InfoMessages : </span>
            {selectedProduct.InfoMessages}
          </p>
          {selectedProduct.FactoryStock && (
            <p>
              <span className="font-bold">FactoryStock : </span>
              {selectedProduct.FactoryStock}
            </p>
          )}
          {selectedProduct.ROHSStatus && (
            <p>
              <span className="font-bold ">FactoryStock : </span>
              {selectedProduct.ROHSStatus}
            </p>
          )}
          {selectedProduct.SuggestedReplacement}
          <button
            type="button"
            onClick={() => setShowMore(true)}
            className={`${
              showMore ? "hidden" : ""
            } text-white flex justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
          >
            <a href={selectedProduct.ProductDetailUrl}>Show more </a>
          </button>
          {showMore ? (
            <>
              <div>
                <h5 className="text-lg">PriceBreaks: </h5>
                {selectedProduct.PriceBreaks.map((item, index) => {
                  return (
                    <ul key={index} className="ml-3">
                      <li>
                        <span className="font-bold">Quantity : </span>
                        {item.Quantity}
                      </li>
                      <li>
                        <span className="font-bold">Price : </span>
                        {item.Price}<span>{item.Currency}</span>
                      </li>
                      
                    </ul>
                  );
                })}
              </div>
              <div>
                <h5 className="text-lg">ProductCompliance : </h5>
                {selectedProduct.ProductCompliance.map((item, index) => {
                  return (
                    <ul key={index} className="ml-3">
                      <li>
                        <span className="font-bold">Compliance Name : </span>
                        {item.ComplianceName}
                      </li>
                      <li>
                        <span className="font-bold">Compliance Value : </span>
                        {item.ComplianceValue}
                      </li>
                    </ul>
                  );
                })}
              </div>
              <div>
                <h5 className="text-lg">ProductAttributes :  </h5>
                {selectedProduct.ProductAttributes.map((item, index) => {
                  return (
                    <ul key={index} className="ml-3">
                      <li>
                        <span className="font-bold">AttributeName : </span>
                        {item.AttributeName}
                      </li>
                      <li>
                        <span className="font-bold">AttributeValue : </span>
                        {item.AttributeValue}
                      </li>
                    </ul>
                  );
                })}
              </div>
              <button
                type="button"
                className="text-white hover:underline flex justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <a href={selectedProduct.ProductDetailUrl}>For More Detail </a>
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </Modal>
    </>
  );
}

export default CustomeModal;
