interface ResponseEvent {
  id: number;
  userId: number;
  title: string;
  dateStart: string;
  dateEnd: string;
}

export const transformResponse = (response: ResponseEvent[]) =>
  response.map((dto) => {
    const dateStart = new Date(dto.dateStart);
    const dateEnd = new Date(dto.dateEnd);

    return {
      ...dto,
      dateStart,
      dateEnd,
      length: dateEnd.getHours() - dateStart.getHours(),
      offset: dateStart.getMinutes() / 60,
    };
  });
