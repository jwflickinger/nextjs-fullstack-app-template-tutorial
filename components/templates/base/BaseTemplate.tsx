export interface IBaseTemplate {}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }: any) => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      {sampleTextProp}
    </div>
  );
};

export default BaseTemplate;
