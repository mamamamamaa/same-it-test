import { FC } from "react";
import { WarehouseInfo } from "../components/WarehouseInfo";
import { WarehouseSearchbar } from "../components/WarehouseSearchbar";

const WarehousesPage: FC = () => {
  return (
    <>
      <WarehouseSearchbar />
      <WarehouseInfo />
    </>
  );
};

export default WarehousesPage;
