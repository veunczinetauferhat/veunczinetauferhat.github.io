class binaryMassive
{
		constructor(aLength)
		{
			this.buffer = new ArrayBuffer(aLength);
			this.view = new Uint8Array(this.buffer);
		}
		
		getByte(bytenumber)
		{
				return this.view[bytenumber];
		}
		
		setByte(bytenumber,bytevalue)
		{
				this.view[bytenumber]=bytevalue;
		}
		
		
		getBit(bytenumber,bitnumber)
		{
				var tenByte = this.view[bytenumber];
				if ((bitnumber>7)||(bitnumber<0))
				{
					return false;
				}
				else
				{
					var delitel=2**bitnumber;
					for (var ijt=128; ijt>delitel; ijt=ijt/2)
					{
							if (tenByte>ijt)
							{
									tenByte = tenByte-ijt;
							}
					}
					if (tenByte>=delitel)
					{
							return true;
					}
					else
					{
							return false;
					}
				}
		}
		
		setBit(bytenumber,bitnumber,znacenie)
		{
				var tenByte = this.view[bytenumber];
				if ((bitnumber<=7)&&(bitnumber>=0))
				{
						var delitel=2**bitnumber;
						for (var ijt=128; ijt>delitel; ijt=ijt/2)
						{
							if (tenByte>ijt)
							{
									tenByte = tenByte-ijt;
							}
						}
						if (tenByte>=delitel)
						{
							if (znacenie==false)
							{
								this.view[bytenumber] = this.view[bytenumber]-delitel;
							}
						}
						else
						{
							if (znacenie==true)
							{
								this.view[bytenumber] = this.view[bytenumber]+delitel;
							}
						}
				}
		}
		
	
	
}
