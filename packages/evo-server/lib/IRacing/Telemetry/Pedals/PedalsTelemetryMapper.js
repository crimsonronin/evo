// @flow
import PedalsDto from 'lib/IRacing/Telemetry/Pedals/PedalsDto';

type PedalData = {
    Throttle: string,
    Brake: string,
    Clutch: string,
};

export default class PedalsTelemetryMapper {
    convert(data: PedalData): PedalsDto {
        const pedals = new PedalsDto();

        pedals.throttle = data.Throttle;
        pedals.brake = data.Brake;
        pedals.clutch = data.Clutch;

        return pedals;
    }
}